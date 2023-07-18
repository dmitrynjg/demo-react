import Container from '@/components/Container/Container';
import FormReqeuest from '@/components/FormRequest/FormReqeuest';
import Header from '@/components/Header/Header';

export default async function Page({ searchParams }) {
  return (
    <Container>
      <Header />
      <FormReqeuest></FormReqeuest>
    </Container>
  );
}
