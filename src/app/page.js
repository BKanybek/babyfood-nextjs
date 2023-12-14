import Hero from '@/components/Hero/Hero'
import styles from './page.module.css'
import Catalog from '@/components/Catalog/Catalog'
import SliderProducts from '@/components/SliderProducts/SliderProducts'

export default function Home() {
  return (
   <div className={styles.container}>
      <Hero/>
      <Catalog/>
      <SliderProducts/>
   </div>
  )
}
