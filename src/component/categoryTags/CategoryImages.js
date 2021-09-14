import { TrackChangesOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Category.css";

export default function CategoryImages(props) {
  const { onChange } = props;
  const [selectedTags, setSelectedTags] = useState([]);

  const onTagChange = (e) => {
    const tagId = e.target.getAttribute("id");
    console.log("e.target.checked", e.target.checked, tagId);
    if (e.target.checked) {
      setSelectedTags([...selectedTags, tagId]);
      console.log(selectedTags);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagId));
      console.log(selectedTags);
    }
  };

//  Currently throws an error saying onChange is not a function? 
//   useEffect(() => {
//     onChange(selectedTags);
//   }, [selectedTags, onChange])

  return (
    <div className="category">
      <table
        align="center"
        cellspacing="0"
        cellpadding="2"
        width="700"
        onChange={onTagChange}
      >
        <tbody>
          <tr>
            <td colspan="5">
              <h2 className="category-item-title">Category</h2>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/sport.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="sport" />
              &nbsp;<label htmlFor="sport">Sport</label>
            </td>
            <td>&nbsp;&nbsp;</td>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/Social & Support Groups.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="ssg" />
              &nbsp;<label htmlFor="ssg">Social & Support Groups</label>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/art.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="art" />
              &nbsp;<label htmlFor="art">Art</label>
            </td>
            <td></td>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/Young Families.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="yf" />
              &nbsp;<label htmlFor="yf">Young Families</label>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/Information.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="Information" />
              &nbsp;<label htmlFor="Information">Information</label>
            </td>
            <td></td>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/Seniors.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="Seniors" />
              &nbsp;<label htmlFor="Seniors">Seniors</label>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/Events.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="Events" />
              &nbsp;<label htmlFor="Events">Events</label>
            </td>
            <td></td>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/Youth.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="Youth" />
              &nbsp;<label htmlFor="Youth">Youth</label>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/Bushfire Recovery.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="br" />
              &nbsp;<label htmlFor="br">Bushfire Recovery</label>
            </td>
            <td></td>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/All Ages.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="aa" />
              &nbsp;<label htmlFor="aa">All Ages</label>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/Entertainment.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="Entertainment" />
              &nbsp;<label htmlFor="Entertainment">Entertainment</label>
            </td>
            <td></td>
            <td>
              <img
                className="category-item-img"
                src={require("../../asset/Education & Training.jpg").default}
                alt=""
              />
            </td>
            <td className="category-item-text">
              <input type="checkbox" id="et" />
              &nbsp;<label htmlFor="et">Education & Training</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
