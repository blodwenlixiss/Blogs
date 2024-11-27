import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/default-layout/defaultLayout";
import { Articles } from "./pages/home/components/card";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { AboutPage } from "./pages/about/components/about";
import { useAtom } from "jotai";
import { userAtom } from "./store/auth";
import { useEffect } from "react";
import { supabase } from "./api";
import { AuthGuard, ProfileGuard } from "./components/route-guard/auth";
import { Profile } from "./pages/profile";

function App() {
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/profile"
            element={
              <ProfileGuard>
                <Profile />
              </ProfileGuard>
            }
          />
          <Route
            path="/login"
            element={
              <AuthGuard>
                <LoginPage />
              </AuthGuard>
            }
          />
          <Route
            path="/register"
            element={
              <AuthGuard>
                <RegisterPage />
              </AuthGuard>
            }
          />
          <Route
            path="*"
            element={
              <h1 className="flex justify-center">404 - Page Not Found</h1>
            }
          />
          <Route path="/" element={<Articles />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
