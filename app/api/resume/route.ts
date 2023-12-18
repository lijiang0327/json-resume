import {getResumeJSON} from './getResumeJSON';

export const GET = async () => {
    const resumeJson = await getResumeJSON()

    return Response.json({data: resumeJson})
}