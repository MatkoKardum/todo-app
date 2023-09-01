const EditOverlay = ({ setEditing }) => {
  return (
    <div
      className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,0.8)] z-0"
      onClick={() => setEditing(false)}
    ></div>
  );
};
export default EditOverlay;
