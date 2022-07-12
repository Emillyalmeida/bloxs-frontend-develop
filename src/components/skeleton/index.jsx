import { DivSkeleton } from "./style";

const Skeleton = () => {
  return (
    <DivSkeleton>
      <div className="Skeleton div-img"></div>
      <div>
        <div className="Skeleton div-title"></div>
        <div className="Skeleton div-title"></div>
        <div className="Skeleton div-title"></div>
      </div>
      <div className="Skeleton div-span"></div>
    </DivSkeleton>
  );
};

export default Skeleton;
