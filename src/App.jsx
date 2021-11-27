import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from './router'
import { Navigation } from './component/Navigation'

export default function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          {
          routes.map(route => (
            <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))
        }
        </Switch>
      </Router>
    </>
  )
}
