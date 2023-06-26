import "./index.css";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

import { dark } from "@clerk/themes";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export function App() {
  return (
    <ClerkProvider
      publishableKey={publishableKey}
      frontendApi="clerk.nt3.me"
      appearance={{
        baseTheme: dark,
      }}
    >
      <nav class="flex flex-wrap items-center justify-between p-4 bg-neutral-800">
        <span>NT3 - A Jonte thing</span>
        <div class="flex">
          <SignedIn>
            <UserButton afterSignOutUrl={window.location.href} />
          </SignedIn>
          <SignedOut>
            <div class="w-[32px] h-[32px] rounded-full bg-neutral-700"></div>
          </SignedOut>
        </div>
      </nav>

      <main class="m-12">
        <SignedIn><SignedInComponent/></SignedIn>
        <SignedOut>
          <h1 class="text-4xl">Welcome to NT3 Apps!</h1>
          <p>NT3 Apps offers one account for all the Jonte Apps.</p>
          <SignInButton mode="modal">
            <div className="p-2 bg-blue-600 rounded inline-block cursor-pointer">
              Sign in
            </div>
          </SignInButton>
        </SignedOut>
      </main>
    </ClerkProvider>
  );
}

function SignedInComponent() {
  let user = useUser();
  return (
    <>
      <h1 class="text-4xl">Greetings, {user.user?.firstName}!</h1>
    </>
  );
}
