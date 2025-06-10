const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full flex items-center justify-center bg-gray-100 p-4">
      {children}
    </div>
  )
}

export default AuthLayout;