import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ArrowButton(
  orientation: "right" | "left" | "up" | "down"
) {
  return (
    <div>
      <button>
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`ml-2 transform transition-transform duration-200 ${
            orientation === "right"
              ? "rotate-0"
              : orientation === "left"
              ? "rotate-180"
              : orientation === "up"
              ? "rotate-270"
              : "rotate-90"
          }`}
        />
      </button>
    </div>
  );
}
