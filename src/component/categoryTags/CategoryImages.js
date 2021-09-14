import React from 'react'
import './Category.css'

export default function CategoryImages() {
    return (
        <div className="category">
            <table align="center" cellspacing="0" cellpadding="2" width="700">
                <tr><td colspan="5"><h2 className="category-item-title">Category</h2></td></tr>
                <tr>
                <td><img className="category-item-img" src="./images/sport.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="sport"/>&nbsp;<label for="sport">Sport</label></td>
                <td>&nbsp;&nbsp;</td>
                <td><img className="category-item-img" src="./images/Social & Support Groups.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="ssg"/>&nbsp;<label for="ssg">Social & Support Groups</label></td>
                </tr>
                <tr>
                <td><img className="category-item-img" src="./images/art.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="art"/>&nbsp;<label for="art">Art</label></td>
                <td></td>
                <td><img className="category-item-img" src="./images/Young Families.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="yf"/>&nbsp;<label for="yf">Young Families</label></td>
                </tr>
                <tr>
                <td><img className="category-item-img" src="./images/Information.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="Information"/>&nbsp;<label for="Information">Information</label></td>
                <td></td>
                <td><img className="category-item-img" src="./images/Seniors.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="Seniors"/>&nbsp;<label for="Seniors">Seniors</label></td>
                </tr>
                <tr>
                <td><img className="category-item-img" src="./images/Events.png" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="Events"/>&nbsp;<label for="Events">Events</label></td>
                <td></td>
                <td><img className="category-item-img" src="./images/Youth.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="Youth"/>&nbsp;<label for="Youth">Youth</label></td>
                </tr>
                <tr>
                <td><img className="category-item-img" src="./images/Bushfire Recovery.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="br"/>&nbsp;<label for="br">Bushfire Recovery</label></td>
                <td></td>
                <td><img className="category-item-img" src="./images/All Ages.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="aa"/>&nbsp;<label for="aa">All Ages</label></td>
                </tr>
                <tr>
                <td><img className="category-item-img" src="./images/Entertainment.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="Entertainment"/>&nbsp;<label for="Entertainment">Entertainment</label></td>
                <td></td>
                <td><img className="category-item-img" src="./images/Education & Training.jpg" alt=""/></td>
                <td className="category-item-text"><input type="checkbox" id="et"/>&nbsp;<label for="et">Education & Training</label></td>
                </tr>          
            </table>
        </div>
    )
}