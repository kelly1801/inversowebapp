
import { MapSectionProps } from "@/types/blocks";
const Map = ({title, body}:MapSectionProps) => {

    return (
        <section className="flex flex-col gap-8 my-4 py-8 px-12 md:px-28">

            <h3 className="text-center text-green-10 text-lg md:text-2xl ">{title}</h3>
            {body && <p className="text-center text-sm">{body}</p>
}
            <div className="w-full radius-lg border-2 border-green-10 rounded-md">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9255673352222!2d-75.56172352500947!3d6.241541793746763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442928886ab277%3A0xb992c693b4e560b0!2sInverso%20Coliving!5e1!3m2!1sen!2sco!4v1743126162713!5m2!1sen!2sco"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className=""
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

            </div>
        </section>


    );
};

export default Map;
