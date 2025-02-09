import AuthView from "~/app/auth/[auth]/auth-view";

export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white justify-center items-center">
      <AuthView />
    </div>
  );
}
