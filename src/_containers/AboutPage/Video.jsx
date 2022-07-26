import React, { useEffect, useState } from "react";
import { images, videoMp4, videoWEBM } from "../../constants";

const Video = () => {
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const videoFile = document.querySelector("#video-file");
        playing ? videoFile.play() : videoFile.pause();
    }, [playing]);

    return (
        <>
            <section className="page__about-info about-info">
                <div className="about-info__container">
                    <h3 className="about-info__title">
                        Balance in the simple through an informed marriage of design, functional and craft
                    </h3>
                    <div className="about-info__row">
                        <div className="about-info__text">
                            <p>
                                Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee
                                street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa
                                fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock chillwave literally
                                post-ironic ramps subway tile kitsch. Shaman tumblr fixie echo park street art. Enamel pin
                                vaporware wayfarers, organic succulents hella sustainable cardigan.
                            </p>
                            <p>
                                Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday carry
                                +1 art party microdosing, put a bird on it brooklyn tilde distillery pork belly single-origin
                                coffee tumblr quinoa copper mug. Affogato cold-pressed unicorn, viral intelligentsia leggings raw
                                denim kombucha tote bag messenger bag chambray vape coloring book scenester. Activated charcoal
                                wayfarers church-key tote bag synth brunch. Retro cornhole
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="page__about-video about-video" onClick={() => setPlaying(!playing)}>
                <div className="about-video__video-row">
                    <video preload="true" id="video-file" loop>
                        <source type="video/webm" src={videoWEBM} />
                        <source type="video/mp4" src={videoMp4} />
                    </video>
                </div>
                <div className={`about-video__cover-ibg ${playing ? "_playing" : "_pause"}`}>
                    <img src={images.defaultImages.videoBg} alt="Video thumbnail" />
                </div>
                <button type="button" className={`about-video__button ${playing ? "_playing" : "_pause"}`}>
                    {!playing ? (
                        <img src={images.defaultImages.videoIcon} alt="Pause Button" />
                    ) : (
                        <span className="about-video__pause">
                            <span className="about-video__line"></span>
                            <span className="about-video__line"></span>
                        </span>
                    )}
                </button>
            </div>
        </>
    );
};

export default Video;
