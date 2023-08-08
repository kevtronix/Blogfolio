import { createContext, useEffect, useState } from 'react';

import axiosConfig from 'utilities/AxiosConfig';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [project, setproject] = useState();

    // Every time project changes, save project.id to localStorage
    useEffect(() => {
        // if project is not null, save project.id to localStorage
        if (project) {
            localStorage.setItem('projectID', project.id);
        }
    }, [project])

    // Retrieve project data from API
    const retrieveproject = async (id) => {
        try {
            const response = await axiosConfig.get(`//${id}`);
            setproject(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <ProjectContext.Provider value={{ project, setproject, retrieveproject }}>
            {children}
        </ProjectContext.Provider>
    );
}
