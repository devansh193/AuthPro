const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-700 to-zinc-950">
      {children}
    </div>
  );
};

export default AuthLayout;
