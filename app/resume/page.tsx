import {getResumeJSON} from '../api/resume/getResumeJSON';

import {Profile} from './profile';
import {Section} from './section';

const Resume = async () => {
    const {profile, sections, schema} = await getResumeJSON() ?? {};

    return <div className="p-8">
        <h1 className="text-center pb-4">Resume of {profile.name}</h1>
        <Profile {...profile} />
        {!!sections?.length && sections.map((section: Record<string, unknown>) => {
            const type = section.type as string;
            const sectionSchema = schema[type];

            return <Section key={type} section={section} schema={sectionSchema}></Section>
        })}
    </div>
}

export default Resume;
