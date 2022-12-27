import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Link, Header } from './SharedLayout.styled';
import {Loader} from "components/Loader/Loader";

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      
    </div>
  );
};
