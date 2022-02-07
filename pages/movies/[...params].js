import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Detail(/* { params } */) {
  const router = useRouter();
  const [title, id] = router.query.params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || 'Loading...'}</h4>
    </div>
  );
}

/* export function getServerSideProps(ctx) {
  const {
    params: { params },
  } = ctx;

  return {
    props: { params },
  };
}
 */
