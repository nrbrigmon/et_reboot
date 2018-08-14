
// import AboutStart from '../components/about/AboutStart';
import LandingPage from 'views/LandingPage/LandingPage';
import LoginPage from 'views/LoginPage/LoginPage';
import MappingPage from 'views/MappingPage/MappingPage';
import MetricsPage from 'views/MetricsPage/MetricsPage';
import DemoPage from 'views/DemoPage/DemoPage';
import VideoPage from 'views/VideoPage/VideoPage';
import DevelopmentTypePage from 'views/DevelopmentTypePage/DevelopmentTypePage';
import BuildingLibraryPage from 'views/BuildingLibraryPage/BuildingLibraryPage';
import BuildingPrototypePage from 'views/BuildingPrototypePage/BuildingPrototypePage';


import NotFound404 from 'views/NotFound404';


var indexRoutes = [
	// { path: "/about", name: "AboutStart", component: AboutStart },
	{ path: "/", name: "LandingPage", component: LandingPage, exact: true },
	{ path: "/login", name: "LoginPage", component: LoginPage, exact: true },
	{ path: "/mapping", name: "MappingPage", component: MappingPage, exact: true },
	{ path: "/metrics", name: "MetricsPage", component: MetricsPage, exact: true },
	{ path: "/demo", name: "DemoPage", component: DemoPage, exact: true },
	{ path: "/video", name: "VideoPage", component: VideoPage, exact: true },
	{ path: "/buildings", name: "BuildingLibraryPage", component: BuildingLibraryPage, exact: true },
	{ path: "/buildings/new/:id", name: "BuildingPrototypePage", component: BuildingPrototypePage, exact: false  },
	{ path: "/buildings/edit/:id", name: "BuildingPrototypePage", component: BuildingPrototypePage, exact: false  },
	{ path: "/dev-types", name: "DevelopmentTypePage", component: DevelopmentTypePage, exact: false  },
	{ path: false, component: NotFound404 }
	
];

export default indexRoutes;
