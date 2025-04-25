interface Props {
  children: string;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible" role="alert">
        {children}
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          data-bs-dismiss="alert"></button>
      </div>
    </>
  );
};
