import { Navigate, Outlet } from 'react-router-dom';
    
const useAuth = () : boolean => {
    const token = localStorage.getItem('token'); // Ganti menjadi true jika login berhasil
    return token != null;
}

const PrivateRoutes = () => {
    const isAuth = useAuth();

    if (isAuth) {
        // Jika sudah login, tampilkan Outlet untuk rute-rute pribadi
        return <Outlet />;
    } else {
        // Jika belum login, redirect ke halaman login dengan mengirimkan referer URL
        return <Navigate to='/Login' />;
    }
};

export default PrivateRoutes;
