"use client";

import { Button } from "./components/Button";

interface ErrorType {
    error: Error;
    reset: () => void;
}

const error: React.FC<ErrorType> = ({error, reset}) => {
    return (
        <div className="pt-[185px]">
          <h1>Что-то пошло не так</h1>
          <p className="mb-[35px] text-danger">{error.message}</p>
          <Button
            typeBtn="fillBg"
            onClick={reset}
          >
            Попробовать снова
          </Button>
        </div>
      );
}

export default error;