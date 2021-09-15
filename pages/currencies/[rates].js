import React from "react";
import { useRouter } from "next/router";

const CurrencyRates = () => {
  const router = useRouter();

  return (
    <div>
      Esta es la pagina de los rates
      {router.query.rates}
    </div>
  );
};

export default CurrencyRates;
