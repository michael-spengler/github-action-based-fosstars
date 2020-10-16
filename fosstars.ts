import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"

export class Fosstars {

    public static async triggerSecurityRating(jarFile: any) {
        await Fosstars.cloneRepo()
        await Fosstars.build()
        console.log('call the jar file')  
    }


    private static async cloneRepo() {
        const commandToBeExecuted = 'git clone https://github.com/SAP/fosstars-rating-core.git'

        console.log(await CommandLineProcessor.process(commandToBeExecuted))

    }

    private static async build() {
        const commandToBeExecuted = 'cd fosstars-rating-core && mvn install'

        console.log(await CommandLineProcessor.process(commandToBeExecuted))

    }
}

Fosstars.triggerSecurityRating({})