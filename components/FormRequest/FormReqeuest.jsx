'use client';
import { createRequest } from '@/lib/request';
import { getUser, getUserByName } from '@/lib/user';
import { useState } from 'react';
import { Button, Modal } from 'react-daisyui';
import Search from '../Search/Search';
import TextareaReqeuest from '../Textarea/Textarea';

export default function FormReqeuest({ login }) {
  const [username, setUserName] = useState(login);
  const [text, setTextArea] = useState('');
  const [visibleModal, setVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    header: '',
    body: '',
  });

  const toggleVisible = () => {
    setVisible(!visibleModal);
  };

  return (
    <>
      {!login && (
        <Search
          placeholder='Найти пользователя'
          onSearch={(val, setList) => {
            setUserName(val);
            getUser(1, val).then((res) => {
              setList(
                res.results.map((data) => ({
                  text: data.login,
                  data,
                }))
              );
            });
          }}
          onClickResult={(userData, setList) => {
            setUserName(userData.login);
            setList([]);
          }}
        />
      )}
      <Modal
        open={visibleModal}
        onClick={toggleVisible}
      >
        <Button
          size='sm'
          shape='circle'
          className='absolute right-2 top-2'
          onClick={toggleVisible}
        >
          ✕
        </Button>
        <Modal.Header className='font-bold'>{modalInfo.header}</Modal.Header>

        <Modal.Body>{modalInfo.body}</Modal.Body>
      </Modal>
      <TextareaReqeuest
        onChangeText={(val) => {
          setTextArea(val);
        }}
      />
      <Button
        onClick={async () => {
          const userResponse = await getUserByName(username);
          if (!userResponse.ok) {
            setModalInfo({
              header: 'Ошибка',
              body: 'Пользователь с таким именем не найден',
            });
            toggleVisible();
            return;
          }
          const reqRes = await createRequest({ userId: userResponse.user.id, text });

          setModalInfo({
            header: reqRes.ok ? 'Успешно' : 'Неудачно',
            body: reqRes.message,
          });

          toggleVisible();
        }}
      >
        Оформить заявку
      </Button>
    </>
  );
}
