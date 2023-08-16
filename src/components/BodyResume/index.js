import { container, bodyStep } from "./style/style.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export const BodyResume = () => {
  return (
    <div className={container}>
      <div className={bodyStep}>
        <div class="title-wrapper">
          <div class="icon-box">
            <FaGraduationCap />
          </div>

          <h3 class="h3">Education</h3>
        </div>
        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              University school of the arts
            </h4>

            <span>2007 — 2008</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">New york academy of art</h4>

            <span>2006 — 2007</span>

            <p class="timeline-text">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              High school of art and design
            </h4>

            <span>2002 — 2004</span>

            <p class="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li>
        </ol>
      </div>

      <div className={bodyStep}>
        <div class="title-wrapper">
          <div class="icon-box">
            <MdWork />
          </div>

          <h3 class="h3">Experience</h3>
        </div>
        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              University school of the arts
            </h4>

            <span>2007 — 2008</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">New york academy of art</h4>

            <span>2006 — 2007</span>

            <p class="timeline-text">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              High school of art and design
            </h4>

            <span>2002 — 2004</span>

            <p class="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};
