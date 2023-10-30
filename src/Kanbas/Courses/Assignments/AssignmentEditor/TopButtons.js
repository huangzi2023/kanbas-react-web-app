import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiMiniEllipsisVertical } from "react-icons/hi2";

export const TopButtons = () => {
  return (
    <div class="row">
      <div class="d-flex pt-3 pb-3 justify-content-end align-items-center">
        <div class="d-flex align-items-center mx-4">
          <button type="button" class="btn">
            {/* <i class="fas fa-check-circle" style="color: #007d00"></i> */}
            <AiOutlineCheckCircle style={{ color: "green" }} />
            Published
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <HiMiniEllipsisVertical />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};
