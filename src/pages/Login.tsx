import { WebBreadcrumb } from "@/components/shared/WebBreadcrumb";
import { LoginForm } from "@/components/modules/Authentication/LoginForm";

export default function Login() {
  return (
    <>
      <WebBreadcrumb
        title="Sign In"
        subtitle="Access your GoRide account"
        buttonText="GET STARTED"
        buttonLink="/login"
      />

      {/* Your login form here */}
      <div className="flex justify-center items-center py-10 bg-gray-50">
        <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow">
          <LoginForm />
        </div>
      </div>
    

    </>
  );
}
