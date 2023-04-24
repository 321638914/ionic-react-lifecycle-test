import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'
import { useEffect } from 'react'

const Home: React.FC = () => {
  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter event fired')
  })

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave event fired')
  })

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter event fired')
  })

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave event fired')
  })

  useEffect(() => {
    console.log('useEffect fired')
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  )
}

export default Home
