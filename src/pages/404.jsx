import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { Badge } from 'reactstrap';

const NotFoundPage = () => {
  return (
    <Layout pageTitle='Page Not Found'>
      <Link to={'/'}>
        <Badge color='info' className='text-uppercase'>GO TO HOMEPAGE</Badge>
      </Link>
    </Layout>
  )
}

export default NotFoundPage;