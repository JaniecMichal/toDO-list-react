import React from 'react';
import {
	FooterWrapper,
	FooterHeader,
	SourceName,
	SourceContainer,
	SourceLink
} from "./styled";


const Footer = () => (
	<FooterWrapper>
		<FooterHeader>
			Wszelkie prawa zastrzeżone.&copy; ToDo List by Imperator. Projekt 2020.
        </FooterHeader>

		<SourceName>Źródła</SourceName>

		<SourceContainer>
			Icons made by {" "}
				<SourceLink
					href="https://www.flaticon.com/authors/freepik"
					title="Freepik"
					target="_blank"
					rel="noreferrer noopener"
				>
					Freepik {" "}
				</SourceLink>
                    from {" "}
				<SourceLink
					href="https://www.flaticon.com/"
					title="Flaticon"
					target="_blank"
					rel="noreferrer noopener"
				>
					www.flaticon.com
                </SourceLink>
		</SourceContainer>

		<SourceContainer>
			Icons made by {" "}
				<SourceLink
					href="https://freeicons.io/profile/3277"
					title="Gayrat Muminov"
					target="_blank"
					rel="noreferrer noopener"
				>
					Gayrat Muminov {" "}
				</SourceLink >
        			from {" "}
				<SourceLink
					href="https://freeicons.io/"
					title="Flaticon"
					target="_blank"
					rel="noreferrer noopener"
				>
					www.flaticon.com
        		</SourceLink>
		</SourceContainer>

		<SourceContainer>
			Icons made by {" "}
				<SourceLink
					href="https://freeicons.io/profile/714"
					title="Raj Dev"
					target="_blank"
					rel="noreferrer noopener"
				>
					Raj Dev {" "}
				</SourceLink>
       				from {" "}
				<SourceLink
					href="https://freeicons.io/"
					title="Flaticon"
					target="_blank"
					rel="noreferrer noopener"
				>
				www.flaticon.com
        		</SourceLink>
		</SourceContainer>
	</FooterWrapper>
);

export default Footer;