import React from "react";


const Header = () => {
  return (
    <header className="bg-background--header py-5 mb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-center">
        <h1>Newsletters</h1>
        <p>
          Dans cette page, vous retrouvez l'ensemble des newsletters des
          Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes
          nos newsletters selon vos centres d'intérêt et gérer plus
          facilement l'inscription à vos newsletters.
        </p>
      </div>
    </header>
  );
};

export default Header;