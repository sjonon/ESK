import React, { Component } from 'react';
import MainNav from './MainNav';
import './MainNav/MainNav.css';
import Footer from './Footer';
import { faSignInAlt, faSignOutAlt, faClipboardList, faIdBadge, faIdCard, faCalendarAlt, faQuestionCircle, faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSignInAlt, faSignOutAlt, faClipboardList, faIdBadge, faIdCard, faCalendarAlt, faQuestionCircle, faBookmarkSolid, faBookmarkRegular)

class App extends Component {
  
  render() {
    return (
      <div>
        <MainNav />
        <div>
        { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;