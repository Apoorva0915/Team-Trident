import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
    const { speciality } = useParams();
    const [filteredDoctors, setFilteredDoctors] = React.useState([]);
    const navigate = useNavigate();
    const { doctors } = React.useContext(AppContext);

    const applyFilter = () => {
        if (speciality) {
            setFilteredDoctors(doctors.filter(doc => doc.speciality === speciality));
        } else {
            setFilteredDoctors(doctors);
        }
    };

    React.useEffect(() => {
        applyFilter();
    }, [speciality, doctors]);

    const handleNavigate = (specialityName) => {
        navigate(speciality === specialityName ? '/doctors' : `/doctors/${specialityName}`);
    };

    const specialities = [
        'General Physician', 'Gynecologist', 'Dermatologist', 
        'Pediatrician', 'Neurologist', 'Gastrologist'
    ];

    return (
        <div>
            <p className='text-gray-600'>Browse through the specialist</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className='flex flex-col gap-4 text-gray-600'>
                    {specialities.map((spec) => (
                        <p
                            key={spec}
                            onClick={() => handleNavigate(spec)}
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
                                speciality === spec ? 'bg-blue-100 text-blue-700' : 'border-gray-300'
                            }`}
                        >
                            {spec}
                        </p>
                    ))}
                </div>
                <div className='w-full grid gap-4 pt-5 gap-y-6 px-3 sm:px-0 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'>
                    {filteredDoctors.map((item, index) => (
                        <div
                            key={item._id}
                            onClick={() => navigate(`/appointment/${item._id}`)}
                            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-1 transition-transform duration-300'
                        >
                            <img className='bg-blue-50 w-full' src={item.image} alt={item.name} />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                    <p>Available</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
