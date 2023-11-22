"use client";

import { RootState, dispatch, useSelector } from "@/common/redux/store";
import { Modal } from "antd";
import { resetState, setOpenModalPreview } from "../../content.slice";
import YouTube from "react-youtube";

export default function PreviewVideo() {
    const open = useSelector(
        (state: RootState) => state.ContentSilce.openModalPreview
    );
    const id_blog = useSelector(
        (state: RootState) => state.ContentSilce.id_blog
    );
    const id_video = useSelector(
        (state: RootState) => state.ContentSilce.link_video
    );
    const closeModal = () => {
        dispatch(resetState(false));
    };

    const opts = {
        height: "390",
        width: "640",
    };
    const isYouTubeVideo = id_video && /^[a-zA-Z0-9_-]{11}$/.test(id_video);
    return (
        <div>
            <Modal
                title={id_blog}
                open={open}
                onOk={closeModal}
                onCancel={closeModal}
                footer={false}
                width="700px"
            >
                {isYouTubeVideo ? (
                    <YouTube videoId={id_video} opts={opts} />
                ) : (
                    <video width="100%" height="100%" controls>
                        <source src={id_video} type="video/mp4" />
                    </video>
                )}
            </Modal>
        </div>
    );
}
