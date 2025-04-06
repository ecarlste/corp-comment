type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message: errorMessage }: ErrorMessageProps) {
  return <div>{errorMessage}</div>;
}

export default ErrorMessage;
