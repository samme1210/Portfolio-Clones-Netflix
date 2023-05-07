import useAuth from "@/hooks/useAuth"
import useSubscription from "@/hooks/useSubscription"
import Head from "next/head"
import Link from "next/link"

function Account() {
    const {user} = useAuth()
    const subscription = useSubscription(user)

  return (
    <div>
        <Head>
        <title>Account Settings - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`bg-[#141414]`}>
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>

        <main className="pt-24">
            <div className="">
                <h1 className="text-3xl md:text-4xl">Account</h1>
                <div>
                    <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
                    <p>Member Since {subscription?.created}</p>
                </div>
            </div>
        </main>
      </header>
    </div>
  )
}

export default Account