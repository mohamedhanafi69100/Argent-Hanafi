import React from "react";
import UserHeader from "../components/user-header/UserHeader";
import Account from "../components/account/Account";
import accounts from "../data/accounts.json";

const User = () => {
  return (
    <>
      <UserHeader />
      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </>
  );
};

export default User;
