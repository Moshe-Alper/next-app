import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import HeavyComponents from './components/HeavyComponent'
 
export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Hello { session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <HeavyComponents />
      {/* <Image 
        src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" 
        alt="Random nature image"
        width={800}
        height={600}
      />     */}
    </main>
  )
}

// export const metadata: Metadata = {
//   title: '...'
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('')

//   return {
//     title: 'product.title',
//     description: '...'
//   }
// }
