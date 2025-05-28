import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Teams from './teams/ipl_teams';
import GujaratTitans from './teams/gt'
import MumbaiIndians from './teams/mi';
import ChennaiSuperKings from './teams/csk'
import RoyalChallengersBengaluru from './teams/rcb'
import DelhiCapitals from './teams/dc'
import PageNotFound from './teams/pagenotfound';

// https://dm.1024terabox.com/main?category=all&path=%2F&fsid=303848541291535&isMultiTransfer=0
// 15) create application that has 10 class components, one for each IPL team. each class components should have player detail as table. table should playername country name type of player age. also create class components for home page which has 12 team name as list . each team is link, when user click upon link user should be redirected on paticular team page. 

function MyRoutes()
{
    return (<BrowserRouter>
        <Routes>
            <Route index path='/' element={<Teams />} />
            <Route path='/gt' element={<GujaratTitans />} />
            <Route path='/mi' element={<MumbaiIndians />} />
            <Route path='/csk' element={<ChennaiSuperKings />} />
            <Route path='/rcb' element={<RoyalChallengersBengaluru />} />
            <Route path='/dc' element={<DelhiCapitals />} />
            {/* 404 Route */}
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRoutes/>);