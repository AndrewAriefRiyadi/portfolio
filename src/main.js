import { createApp } from 'vue'
import App from './App.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icons
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGamepad } from '@fortawesome/free-solid-svg-icons'

// Masukkan ke library
library.add(faFacebook, faInstagram, faGithub, faLinkedin, faEnvelope, faGamepad)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
