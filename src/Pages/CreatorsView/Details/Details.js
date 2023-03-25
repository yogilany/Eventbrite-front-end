import React, { useState } from 'react'
import './Details.css'
import EventImage from './Components/EventImage/EventImageBox'
import Summary from './Components/SummaryBox/Summary'
import Description from './Components/Description/Description'
import AddEvents from './Components/AddEvents/AddEvents'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../../../components/header/Header'
import CreatorHeader from './Components/creatorHeader/CreatorHeader'
import { createContext } from 'react'
export const AppContext = createContext({});
/**
 * @author Mahmoud Khaled
 * @param {}
 * @description This is Container of Detials Page that Contains Main Event Image , Summary , Description and Add Event Sections
 * @returns {JSX.Element}
 */
const Details = () => {
  const handleForm = (e) => {
    e.preventDefault();
  }
    const [toggleSidebar, setToggleSidebar] = useState(false);
    return (
      <AppContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
        <div className="Details__page">
          <CreatorHeader MenuShow={true} />
          <Sidebar />
          <form onSubmit={handleForm}>
            <div className={`Details__container ${toggleSidebar ? "details__opacity" : ''}`}>
              <EventImage />
              <Summary />
              <Description />
              <AddEvents />
            </div>
            <div className="submit__section">
              <button className="discard__btn">Discard</button>
              <button type="submit" className="submit__btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </AppContext.Provider>
    );
  }
export default Details;
