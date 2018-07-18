
// import AboutStart from '../components/about/AboutStart';
import LandingPage from 'views/LandingPage/LandingPage';
import LoginPage from 'views/LoginPage/LoginPage';
import MappingPage from 'views/MappingPage/MappingPage';
import DemoPage from 'views/DemoPage/DemoPage';
import BuildingLibraryPage from 'views/BuildingLibraryPage/BuildingLibraryPage';
import BuildingPrototypePage from 'views/BuildingPrototypePage/BuildingPrototypePage';


import NotFound404 from 'views/NotFound404';


var indexRoutes = [
	// { path: "/about", name: "AboutStart", component: AboutStart },
	{ path: "/", name: "LandingPage", component: LandingPage, exact: true },
	{ path: "/login", name: "LoginPage", component: LoginPage, exact: true },
	{ path: "/mapping", name: "MappingPage", component: MappingPage, exact: true },
	{ path: "/demo", name: "DemoPage", component: DemoPage, exact: true },
	{ path: "/building", name: "BuildingLibraryPage", component: BuildingLibraryPage, exact: true },
	{ path: "/building/new/:id", name: "BuildingPrototypePage", component: BuildingPrototypePage, exact: false  },
	{ path: "/building/edit/:id", name: "BuildingPrototypePage", component: BuildingPrototypePage, exact: false  },
	{ path: false, component: NotFound404 }
	
];

export default indexRoutes;
