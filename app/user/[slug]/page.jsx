import Container from '@/components/Container/Container';
import FormReqeuest from '@/components/FormRequest/FormReqeuest';
import Header from '@/components/Header/Header';
import UserInfo from '@/components/UserInfo/UserInfo';
import { getUserByName } from '@/lib/user';

export default async function Page({ params: { slug } }) {
  const userResponse = await getUserByName(slug);

  return (
    <Container>
      <Header />
      {userResponse.ok && (
        <div>
          <UserInfo
            id={userResponse.user.id}
            email={userResponse.user.email}
            login={userResponse.user.login}
            name={userResponse.user.name}
            surname={userResponse.user.surname}
            fatherName={userResponse.user.fatherName}
          />
          <FormReqeuest login={userResponse.user.login} />
        </div>
      )}
    </Container>
  );
}
