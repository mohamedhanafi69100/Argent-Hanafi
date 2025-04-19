import React, { useState } from "react";

const Account = ({ account }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen((prev) => !prev);

  const formattedAmount = account.balance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <section className="account">
      <div className="account-container">
        <div className="account-content-wrapper">
          <h3 className="account-title">{account.name}</h3>
          <p className="account-amount">${formattedAmount}</p>
          <p className="account-amount-description">
            {account.type === "credit"
              ? "Current Balance"
              : "Available Balance"}
          </p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={toggleCollapse}>
            View transactions
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="transactions-wrapper-open">
          {/* ici tu peux ajouter la liste des transactions plus tard */}
          <p>Transactions will go here</p>
        </div>
      )}
    </section>
  );
};

export default Account;
