import GroupInfo from '../components/GroupInfo'
import Login from '../components/login'
export default function (router) {
  router.map({
    /**
     * @param {String} from '/store/ab' or '/store/side'
     */
    '/groupinfo': {
      name: 'groupinfo',
      component: GroupInfo
    },
    '/login': {
      name: 'login',
      component: Login
    }
  })
}