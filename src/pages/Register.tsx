import { WebBreadcrumb } from "@/components/shared/WebBreadcrumb";
import { RegisterForm} from "@/components/modules/Authentication/RegisterForm";

export default function Register() {
  return (
    <>
      <WebBreadcrumb
             title="Sign Up"
             subtitle="Join GoRide as a rider or driver"
             buttonText="GET STARTED"
             buttonLink="/register"
           />
     
           {/* Your login form here */}
           <div className="flex justify-center items-center py-10 bg-gray-50">
             <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow">
               <RegisterForm />
             </div>
           </div>
    </>
  );
}