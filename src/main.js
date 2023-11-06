import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import TheHeader from './components/TheHeader.vue'
import BaseButton from './components/BaseButton.vue'
import BaseCard from './components/BaseCard.vue'
import BasePopup from './components/BasePopup.vue'

app.component('the-header', TheHeader)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-popup', BasePopup)

app.mount('#app')
