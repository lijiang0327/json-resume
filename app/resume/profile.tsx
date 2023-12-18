import {FC} from 'react';

export type ProfileProps = {
    name: string
    phone: string
    gender: string
    age: number
}

export const Profile: FC<ProfileProps> = ({name, phone, gender, age}) => {
    return <div className="flex flex-col">
        <h2 className="font-bold">Profile</h2>
        <div className="flex items-center justify-between pl-8">
            <div>
                <span>Name:</span>
                <span>{name}</span>
            </div>
            <div>
                <span>Gender:</span>
                <span>{gender}</span>
            </div>
        </div>
        <div className="flex items-center justify-between pl-8">
            <div>
                <span>Age:</span>
                <span>{age}</span>
            </div>
            <div>
                <span>Phone:</span>
                <span>{phone}</span>
            </div>
        </div>
    </div>
}
