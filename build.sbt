ThisBuild / scalaVersion := props.ScalaVersion
ThisBuild / version      := props.ProjectVersion
ThisBuild / organization := props.Org

ThisBuild / developers := List(
  Developer(
    props.GitHubUsername,
    "armintonic",
    "",
    url(s"https://github.com/${props.GitHubUsername}"),
  ),
)

ThisBuild / homepage   := url(s"https://github.com/${props.GitHubUsername}/${props.RepoName}").some
ThisBuild / scmInfo    :=
  ScmInfo(
    url(s"https://github.com/${props.GitHubUsername}/${props.RepoName}"),
    s"https://github.com/${props.GitHubUsername}/${props.RepoName}.git",
  ).some


lazy val tonicWebsite = (project in file("."))
  .enablePlugins(DocusaurPlugin)
  .settings(
    name             := props.RepoName,
    docusaurDir      := (ThisBuild / baseDirectory).value / "website",
    docusaurBuildDir := docusaurDir.value / "build",
  )

lazy val props =
  new {
    val ScalaVersion = "2.13.14"
    val Org          = "systems.tonic"

    private val gitHubRepo = findRepoOrgAndName

    val GitHubUsername       = gitHubRepo.fold("armintonic")(_.orgToString)
    val RepoName             = gitHubRepo.fold("tonic-website")(_.nameToString)

    val ProjectName    = RepoName
    val ProjectVersion = "0.1.0"
  }

