import React from 'react';
import { User } from '@app/shared';

type AppProps = {
  user: User
};

export default function App(props: AppProps) {
  return (
    <div>Hello {props.user.firstname}!</div>
  );
};
