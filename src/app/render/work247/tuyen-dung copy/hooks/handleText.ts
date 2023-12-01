export function extractApplicationDeadline(text: string) {
    const deadlineRegex = /Hạn nộp: (\d{2}-\d{2}-\d{4})/;
    const match = text.match(deadlineRegex);
    return match ? match[1] : null;
}
export function extractJobDescription(text: string) {
    const startIdx = text.indexOf("Mô tả công việc:");
    const endIdx = text.indexOf("Yêu cầu công việc:");
    if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
        return null;
    }

    const jobDescription = text
        .substring(startIdx + "Mô tả công việc:".length, endIdx)
        .trim();
    return jobDescription;
}
export function extractRequirementsToBenefits(text: string) {
    const startIdx = text.indexOf("Yêu cầu công việc:");
    const endIdx = text.indexOf("Quyền lợi được hưởng:");
    if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
        return null;
    }
    const requirements = text
        .substring(startIdx + "Yêu cầu công việc:".length, endIdx)
        .trim();

    return requirements;
}

export function extractBenefitsToApplicationDocs(text: string) {
    const startIdx = text.indexOf("Quyền lợi được hưởng:");
    const endIdx = text.indexOf("Hồ sơ bao gồm:");
    if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
        return null;
    }
    const benefits = text
        .substring(startIdx + "Quyền lợi được hưởng:".length, endIdx)
        .trim();

    return benefits;
}
export function extractApplicationDocsToContactInfo(text: string) {
    const startIdx = text.indexOf("Hồ sơ bao gồm:");
    const endIdx = text.indexOf("Thông tin liên hệ:");

    if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
        return null;
    }
    const applicationDocs = text
        .substring(startIdx + "Hồ sơ bao gồm:".length, endIdx)
        .trim();

    return applicationDocs;
}
export function extractContactInfoToRecruitmentInfo(text: string) {
    const startIdx = text.indexOf("Thông tin liên hệ:");
    const endIdx = text.indexOf("Thông tin tuyển dụng:");

    if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
        return null;
    }

    const contactInfo = text
        .substring(startIdx + "Thông tin liên hệ:".length, endIdx)
        .trim();

    return contactInfo;
}
export function extractRecruitmentInfoToEnd(text: string) {
    const startIdx = text.indexOf("Thông tin tuyển dụng:");
    if (startIdx === -1) {
        return null;
    }
    const recruitmentInfo = text
        .substring(startIdx + "Thông tin tuyển dụng:".length)
        .trim();

    return recruitmentInfo;
}